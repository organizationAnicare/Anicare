package anicare.logic.config.security;

import anicare.logic.config.security.oauth.CustomOAuth2UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private CustomOAuth2UserService oAuth2UserService;
    private static final String [] staticResources = {
            "/css/**",
            "/js/**",
            "/img/**",
    };

    @Override
    public void configure(WebSecurity web) throws Exception //정적 자원 인증제외
    {
        web.ignoring().antMatchers(staticResources);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //일단 disable
        http.csrf().disable()
                .authorizeRequests()
                //member 요청에 대해서는 권한필요, user는 모두허용
                .antMatchers("/member/**").authenticated()
                .antMatchers("/user/**").permitAll()
                .and()

                //폼 로그인 방식
                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .usernameParameter("email") //username을 email로
                .defaultSuccessUrl("/main")
                .permitAll()
                .and()

                //로그아웃
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .and()

                //Oauth 로그인 방식
                .oauth2Login()
                .loginPage("/login")
                .userInfoEndpoint()
                .userService(oAuth2UserService);

    }

    @Bean
    public BCryptPasswordEncoder encoder()
    {
        return new BCryptPasswordEncoder();
    }
}
