var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })

        function changeImage() {
        let image = document.getElementById('ph');
        if (image.src.includes('ASET/dark98.png')) {
            image.src = 'ASET/white98.png';
        } else {
            image.src = 'ASET/dark98.png';
        }

        let image2 = document.getElementById('ph2');
        if (image2.src.includes('ASET/malem.png')) {
            image2.src = 'ASET/pagi.png';
        } else {
            image2.src = 'ASET/malem.png';
        }
        }