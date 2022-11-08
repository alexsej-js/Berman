
    document.querySelectorAll('.accordion-control').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            if (parent.classList.contains('open-acc')) {
                parent.classList.remove('open-acc');
            }   else {
                document.querySelectorAll('.accordion-control').forEach((child) => child.classList.remove('open-acc'))


                parent.classList.add('open-acc');
            }
        })
    ) 



