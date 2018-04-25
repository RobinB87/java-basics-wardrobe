package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.*;

/**
 * HTTP requests are handled by a controller.
 * These components are easily identified by the @RestController annotation
 * Class controller handles GET requests for /wardrobe by returning a new instance of the Wardrobe class:
 * <p>
 * Controller class acts on both the model and the view (view = visualization of data (print))
 */


@RestController
@RequestMapping("/api/wardrobe")
public class WardrobeController {

    /**
     * Create wardrobe instance
     * Create getWardrobe function
     */

    public static Wardrobe wardrobe;

    @PostMapping("/create")
    public void create(Wardrobe wardrobe){
        this.wardrobe = wardrobe;
    }

    //als je bovenstaande link intypt, met deze / dan ga je naar de lijst met all wardrobes
    @GetMapping("/get")
    public Wardrobe getWardrobe() {
            return wardrobe;
    }

    /**
     * Wardrobe functionalities
     */

    @PostMapping("/start")
    public void start() {
        // start the game

    }

    @PostMapping("/open")
    public void open() {
        this.wardrobe.setOpen(true);
        System.out.println(wardrobe.isOpen());
    }

    @PostMapping("/close")
    public void close() {
        this.wardrobe.setOpen(false);
    }

    @PostMapping("/inside")
    public void getIn() {
        this.wardrobe.setInside(true);
    }

    @PostMapping("/outside")
    public void getOut() {
        this.wardrobe.setInside(false);
    }

    @PostMapping("/headfirst")
    public void isBroken(int force){
        this.wardrobe.setBroken(true);
    }
}
