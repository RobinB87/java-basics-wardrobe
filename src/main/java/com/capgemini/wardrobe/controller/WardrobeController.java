package com.capgemini.wardrobe.controller;

import com.capgemini.wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


//controller class acts on both the model and the view (view = visualization of data (print))

@RestController
@RequestMapping("/api/wardrobe")
public class WardrobeController {

    private static ArrayList<Wardrobe> wardrobeList = new ArrayList<>();

    /**
     * wardrobe functionalities
     */

    @GetMapping("/{name}")
    public void addList(@PathVariable String name){
        Wardrobe wardrobe = new Wardrobe(name);
        wardrobeList.add(wardrobe);
    }

    @GetMapping("/allnames")
    public ArrayList<Wardrobe> getAllWardrobes(){
        return wardrobeList;
    }

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
