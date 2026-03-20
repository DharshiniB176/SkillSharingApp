package com.skillsharing.request.service;

import com.skillsharing.request.dto.SkillRequestDTO;
import com.skillsharing.request.entity.RequestStatus;
import com.skillsharing.request.entity.SkillRequestEntity;
import com.skillsharing.request.repository.SkillRequestRepository;
import com.skillsharing.skill.repository.SkillRepository;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillRequestService {

    private final SkillRequestRepository requestRepository;
    private final UserRepository userRepository;
    private final SkillRepository skillRepository;

    public SkillRequestService(
            SkillRequestRepository requestRepository,
            UserRepository userRepository,
            SkillRepository skillRepository) {

        this.requestRepository = requestRepository;
        this.userRepository = userRepository;
        this.skillRepository = skillRepository;
    }

//    public SkillRequestEntity createRequest(Long requesterId, SkillRequestDTO dto) {
//
//        SkillRequestEntity request = new SkillRequestEntity();
//
//        request.setRequester(userRepository.findById(requesterId).orElseThrow());
//        request.setTeacher(userRepository.findById(dto.getTeacherId()).orElseThrow());
//        request.setSkill(skillRepository.findById(dto.getSkillId()).orElseThrow());
//
//        request.setStatus(RequestStatus.PENDING);
//
//        return requestRepository.save(request);
//    }

    public List<SkillRequestEntity> getIncomingRequests(Long teacherId) {
        return requestRepository.findByTeacherId(teacherId);
    }

    public SkillRequestEntity updateStatus(Long requestId, RequestStatus status) {

        SkillRequestEntity request =
                requestRepository.findById(requestId).orElseThrow();

        request.setStatus(status);

        return requestRepository.save(request);
    }

    public List<SkillRequestEntity> getOutgoingRequests(Long requesterId) {
        return requestRepository.findByRequesterId(requesterId);
    }

    public SkillRequestEntity createRequest(Long requesterId, SkillRequestDTO dto) {

        boolean exists = requestRepository
                .existsByRequesterIdAndTeacherIdAndSkillId(
                        requesterId,
                        dto.getTeacherId(),
                        dto.getSkillId()
                );

        if (exists) {
            throw new RuntimeException("Request already exists");
        }

        SkillRequestEntity request = new SkillRequestEntity();

        request.setRequester(userRepository.findById(requesterId).orElseThrow());
        request.setTeacher(userRepository.findById(dto.getTeacherId()).orElseThrow());
        request.setSkill(skillRepository.findById(dto.getSkillId()).orElseThrow());

        request.setStatus(RequestStatus.PENDING);

        return requestRepository.save(request);
    }
}