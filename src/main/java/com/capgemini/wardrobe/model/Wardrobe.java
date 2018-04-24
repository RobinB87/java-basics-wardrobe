package com.capgemini.wardrobe.model;

public class Wardrobe {

    private int id;
    private String name = "";
    private boolean isOpen;
    private boolean isInside;
    private boolean isBroken;

    //parameterloze constructor, nodig voor bootstrap
    public Wardrobe() {
    }

    //constructor met id en name
    public Wardrobe(int id, String name) {
        this.id = id;
        this.name = name;
    }

    //getters voor de variabelen
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public boolean isInside() {
        return isInside;
    }

    public boolean isBroken() {
        return isBroken;
    }
}