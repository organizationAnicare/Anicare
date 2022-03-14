package anicare.logic.config.security.auth;

import anicare.logic.dao.user.UserDao;
import anicare.logic.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserDao findMember = userRepository.findByEmail(email);
        if(findMember == null) throw new UsernameNotFoundException(email);
        return new CustomPrincipalDetails(findMember);
    }
}
