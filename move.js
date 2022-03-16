// MOVE FUNCTION
function move(element) {
    // SETTING ELEMENT POSITION TO FIXED
    element.style.position = 'fixed'
    // FUCNTION TO HANDLE ELEMENT COORDINATES (LEFT, BOTTOM)
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    // FUNCTION TO MOVE CHARACTER WITH ARROW KEYS
    function moveWithKeys(left, bottom, handleChange) {
        // SETTING DEFAULT DIRECTION TO NULL
        let direction = null;
        // LEFT AND BOTTOM WILL BE SET TO VARIABLES X,Y
        let x = left;
        let y = bottom;
        // ADDING POSITION TO ELEMENT
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
        // FUNCTION TO CHANGE VARIABLES X AND Y TO CHANGE DIRECTION
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }
        // RUNNING MOVECHARACTER EVERY SEC.
        setInterval(moveCharacter, 1)
        // ADDING KEYDOWN EVENT LISTENER TO HANDLE DIRECTION CHANGE
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west';
            }
            if(e.key === 'ArrowUp'){
                direction = 'north';
            }
            if(e.key === 'ArrowRight'){
                direction = 'east';
            }
            if(e.key === 'ArrowDown'){
                direction = 'south';
            }
            // CALLING CALLBACK FUNCTION
            handleChange(direction);
        });
        // ADDING KEYUP EVENTLISTENER TO HANDLE WHEN KEY IS NOT PRESSED
        document.addEventListener('keyup', function(e){
            direction = null;
            // CALLLING CALLBACK FUNCTION
            handleChange(direction);
        });
    };
    // RETURNING FUNCTIONS USING OBJECTS
    return {
        to: moveToCoordinates,
        withKeys: moveWithKeys
    };
};
