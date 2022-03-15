package anicare.logic.config.security.oauth;

import anicare.logic.config.security.auth.CustomPrincipalDetails;
import anicare.logic.config.security.oauth.provider.OAuthAttributes;
import anicare.logic.dao.user.UserDao;
import anicare.logic.dto.user.UserSignupDto;
import anicare.logic.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        //providerName
        String provider = userRequest.getClientRegistration().getRegistrationId();
        //구글 , 카카오 구분하여 객체생성
        OAuthAttributes attribute = OAuthAttributes.of(provider,oAuth2User.getAttributes());
        UserDao findUser = userRepository.findByEmail(attribute.getEmail());
        //첫 로그인
        if(findUser == null)
        {
            //join member
            findUser = userRepository.save(attribute.toEntity());
        }
        return new CustomPrincipalDetails(findUser,oAuth2User.getAttributes());
    }

}
