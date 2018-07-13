function print(text) {
    if (text == undefined) {
        var textp = prompt("Text to print")
    } else {
      textp = text
    }
    document.write(textp)
}
