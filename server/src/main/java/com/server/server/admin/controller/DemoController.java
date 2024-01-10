package com.server.server.admin.controller;

import jakarta.annotation.security.RolesAllowed;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class DemoController {

    @GetMapping("/everyone-authenticated")
    public String getEveryoneText() {
        return "hello to everyone that is authenticated";
    }

    @RolesAllowed("USER")
    @GetMapping
    public String hello() {
        return "This is user content!";
    }

    @RolesAllowed("ADMIN")
    @GetMapping("/demo")
    public String hello2() {
        return "This is admin content!";
    }

}
