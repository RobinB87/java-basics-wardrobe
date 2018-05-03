package com.capgemini.wardrobe.model;

public class Witch {

    private String name;
    private boolean isAlive;

    public Witch(String name){
        this.name = name;
    }

    public boolean isAlive(){
        return isAlive;
    }

    public void setAlive(boolean isAlive){
        this.isAlive = isAlive;
    }
}
