
// Task done
$("ul").on("click", "li", function () { // no funciona la función flecha acá
    // Change the color of the task
    $(this).toggleClass('done')
})

// Remove task
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove()
    })
    event.stopPropagation()
})

// Add task
$("input").keypress(function (event) {
    const task = $("input").val()

    if (event.which === 13) {
        if (task.trim().length > 0) {
            $("ul").append("<li><span class='delete'><i class='fas fa-trash-alt' aria-hidden='true'></i></span>"
                + task + "</li>")
            $("input").val("")
        }
    }
})
