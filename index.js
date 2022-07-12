function settingApp(source) {
    this.source = source;
    if (source == true) {
        return true;
    } else if (source == false) {
        alert("The source is not found.");
    }
}