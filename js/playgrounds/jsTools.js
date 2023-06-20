let result = document.getElementById('update')

function aPrint() {
    result.innerText = 'Hello World'
}
function theAlert() {
    alert("Hello World")
    result.innerText = "An alert said Hello World"
}
function valueC() {
    var a = 2
    var b = 3
    var c = a + b
    result.innerText = "the value of c is: 5"
}
function growMe(element) {
    element.style.height = "200px"
    element.style.width = "500px"
}
function returnMe(element) {
    element.style.height = "50px"
    element.style.width = "300px"
}

function great() {
    result.innerText = 'Great Job'
}
function tryAgain() {
    result.innerText = 'Please try again'
}
function clearTerm() {
    result.innerHTML = ''
}
function jobDone() {
    result.innerText = 'the loop is now finished nothing to print'
}
function printValue(a) {
    result.innerText = `the value of i is: ${a}`
}
function followInstructions() {
    result.innerText = 'I will now follow my instructions'
}

function stepOne() {
    var selection = document.loopStart.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    if(selection == 'Yes') {
        great()
        setTimeout(function() {
            followInstructions()
            setTimeout(function() {
                printValue(0)
                setTimeout(function() {
                    clearTerm()
                    stepOne.style.display = 'none'
                    sTwo.style.display = 'flex'
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function stepTwo() {
    var selection = document.sTwo.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    if(selection == 'Yes') {
        great()
        setTimeout(function() {
            followInstructions()
            setTimeout(function() {
                printValue(1)
                setTimeout(function() {
                    clearTerm()
                    stepOne.style.display = 'none'
                    sTwo.style.display = 'none'
                    sThree.style.display = 'flex'
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function stepThree() {
    var selection = document.sThree.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    var sFour = document.getElementById('finalStep')
    if(selection == 'No') {
        great()
        setTimeout(function() {
            followInstructions()
            setTimeout(function() {
                jobDone()
                setTimeout(function() {
                    clearTerm()
                    stepOne.style.display = 'none'
                    sTwo.style.display = 'none'
                    sThree.style.display = 'none'
                    sFour.style.display = 'flex'
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function final() {
    var again = document.startOver.choice.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    var sFour = document.getElementById('finalStep')
    if(again == 'Yes') {
        stepOne.style.display = 'flex'
        sTwo.style.display = 'none'
        sThree.style.display = 'none'
        sFour.style.display = 'none'
    } else {
        result.innerText = 'Hope this helped!'
    }
}








$(document).ready(function() {
    $('#showConsole').click(function() {
        $('#hideConsole').animate( {
            width: 'toggle'
        })
        $('#hideConsole').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showAlert').click(function() {
        $('#hideAlert').animate( {
            width: 'toggle'
        })
        $('#hideAlert').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showAdding').click(function() {
        $('#hideAdding').animate( {
            width: 'toggle'
        })
        $('#hideAdding').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showGrow').click(function() {
        $('#hideGrow').animate( {
            width: 'toggle'
        })
        $('#hideGrow').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
})