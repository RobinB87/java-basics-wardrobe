package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Witch;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/witch")
public class WitchController {

    public static Witch witch;

//    @PostMapping("/create")
//    public void create(Witch witch) {
//        this.witch = witch;
//    }

    //method to kill witch
    public void killWitch(boolean setAlive){
        if (Math.random() > 0.5){
            this.witch.setAlive(false);
        }
    }
}
