package anicare.logic.config.security.oauth;

import anicare.logic.config.security.auth.CustomPrincipalDetails;
import anicare.logic.dao.user.UserDao;
import anicare.logic.dto.user.UserSignupDto;
import anicare.logic.repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getClientId();
        String providerId = oAuth2User.getAttribute("sub");
        String email = provider+"_"+providerId; // provider_providerId
        UserDao findMember = userRepository.findByEmail(email);
        //구글 첫 로그인
        if(findMember == null)
        {
            String name = oAuth2User.getAttribute("name");
            //password, animal은 우선 null
            findMember = UserDao.builder()
                    .name(name)
                    .email(email)
                    .password(null)
                    .animal(null)
                    .build();
        }

        return new CustomPrincipalDetails(findMember,oAuth2User.getAttributes());
    }

}
