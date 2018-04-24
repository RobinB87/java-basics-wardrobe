package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * HTTP requests are handled by a controller.
 * These components are easily identified by the @RestController annotation
 * Class controller handles GET requests for /wardrobe by returning a new instance of the Wardrobe class:
 *
 * Controller class acts on both the model and the view (view = visualization of data (print))
 */



@RestController
@RequestMapping("/api/wardrobe")
public class WardrobeController {

    /**
     * Create wardrobe list
     * Create wardrobe instance
     * Create getWardrobe function
     */

    private static ArrayList<Wardrobe> wardrobeList = new ArrayList<>();

    @GetMapping("/{id}/{name}")
    public void addWardrobe(@PathVariable int id, @PathVariable String name){
        Wardrobe wardrobe = new Wardrobe(id, name);
        wardrobeList.add(wardrobe);
    }

    @GetMapping("/")
    public ArrayList<Wardrobe> getAllWardrobes(){
        return wardrobeList;
    }


    /**
     * Wardrobe functionalities
     */

    public void open(){
    }

    public void close(){
    }

    public void getIn(){
    }

    public void getOut(){
    }

    public int kick(int force){
        return force;
    }
}
