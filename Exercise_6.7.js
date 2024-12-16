    let start = 10;

    function cycle1 (val) {
        console.log(val);
        if (val < 1) {
            return cycle1;
        } else {
            return cycle1(--val);
        }
        
    }
    cycle1(start);

    function cycle2 (val) {
        console.log(val);
        if (val > 0) {
            --val;
            return cycle2(val);
        } else {
            return cycle2;
        }
    }

    cycle2(start);