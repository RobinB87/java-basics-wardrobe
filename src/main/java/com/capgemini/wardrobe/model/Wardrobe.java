package com.capgemini.wardrobe.model;

public class Wardrobe {

    private String name = "";
    private boolean isOpen;
    private boolean isInside;
    private boolean isBroken;

    //parameterloze constructor
    public Wardrobe(){}

    //
    public Wardrobe(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public boolean isInside() {
        return isInside;
    }

    public void setInside(boolean inside) {
        isInside = inside;
    }

    public boolean isBroken() {
        return isBroken;
    }

    public void setBroken(boolean broken) {
        isBroken = broken;
    }
}
