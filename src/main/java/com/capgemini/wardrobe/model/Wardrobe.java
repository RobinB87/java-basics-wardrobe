package com.capgemini.wardrobe.model;

public class Wardrobe {

    private String name = "";

    public Wardrobe(){}

    public Wardrobe(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setName(){
        this.name = name;
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
