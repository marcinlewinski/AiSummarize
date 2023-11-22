package com.server.server.admin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/auth")
public class DemoController {
    @GetMapping
    public String hello() {
        return "This is admin content!";
    }

    @GetMapping("/demo")
    public String hello2() {
        return "This is user content!";
    }
}
