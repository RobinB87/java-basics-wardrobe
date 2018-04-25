package com.capgemini.wardrobe.model;

public class Wardrobe {

    private String name;
    private boolean isOpen;
    private boolean isInside;
    private boolean isBroken;

    //parameterloze constructor, nodig voor spring boot
    public Wardrobe() {
    }

    //constructor met id en name
    public Wardrobe(String name) {
        this.name = name;
    }

    //getters voor de variabelen
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

    //setters
    public void setName(String name) {
        this.name = name;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public void setInside(boolean inside) {
        isInside = inside;
    }

    public void setBroken(boolean broken) {
        isBroken = broken;
    }
}