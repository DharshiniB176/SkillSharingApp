package com.skillsharing.request.controller;

import com.skillsharing.request.dto.SkillRequestDTO;
import com.skillsharing.request.entity.RequestStatus;
import com.skillsharing.request.entity.SkillRequestEntity;
import com.skillsharing.request.service.SkillRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skill-requests")
public class SkillRequestController {

    private final SkillRequestService requestService;

    public SkillRequestController(SkillRequestService requestService) {
        this.requestService = requestService;
    }

    @PostMapping
    public SkillRequestEntity createRequest(
            @RequestParam Long userId,
            @RequestBody SkillRequestDTO dto) {

        return requestService.createRequest(userId, dto);
    }
    @GetMapping("/incoming")
    public List<SkillRequestEntity> getIncomingRequests(@RequestParam Long userId) {
        return requestService.getIncomingRequests(userId);
    }

    @PutMapping("/{requestId}/status")
    public SkillRequestEntity updateStatus(
            @PathVariable Long requestId,
            @RequestParam RequestStatus status) {

        return requestService.updateStatus(requestId, status);
    }

    @GetMapping("/outgoing")
    public List<SkillRequestEntity> getOutgoingRequests(@RequestParam Long userId) {
        return requestService.getOutgoingRequests(userId);
    }
}