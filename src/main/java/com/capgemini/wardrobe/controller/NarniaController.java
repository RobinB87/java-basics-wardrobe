package com.capgemini.wardrobe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/narnia")
public class NarniaController {

    @GetMapping("/enter")
    public String enter() {
        return "Narnia";
    }
}
