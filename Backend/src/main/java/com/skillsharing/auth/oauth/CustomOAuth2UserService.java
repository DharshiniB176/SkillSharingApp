package com.skillsharing.auth.oauth;


import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.entity.UserRole;
import com.skillsharing.user.entity.UserStatus;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oauthUser = super.loadUser(userRequest);
        Map<String, Object> attrs = oauthUser.getAttributes();

        String email = (String) attrs.get("email");
        String name = (String) attrs.get("name");

        userRepository.findByEmail(email)
                .orElseGet(() -> {
                    UserEntity user = new UserEntity();
                    user.setEmail(email);
                    user.setFullName(name);
                    user.setRole(UserRole.USER);
                    user.setStatus(UserStatus.ACTIVE);
                    return userRepository.save(user);
                });

        return oauthUser;
    }
}

