package com.skillsharing.interest.service;

import com.skillsharing.interest.entity.UserInterestEntity;
import com.skillsharing.interest.repository.UserInterestRepository;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInterestService {

    private final UserInterestRepository repository;
    private final UserRepository userRepository;

    public UserInterestService(UserInterestRepository repository,
                               UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public void saveInterests(Long userId, List<String> interests) {

        UserEntity user = userRepository.findById(userId)
                .orElseThrow();


        repository.deleteAll(repository.findByUserId(userId));


        for (String i : interests) {
            UserInterestEntity entity = new UserInterestEntity();
            entity.setInterest(i);
            entity.setUser(user);
            repository.save(entity);
        }
    }

    public List<UserInterestEntity> getUserInterests(Long userId) {
        return repository.findByUserId(userId);
    }
}