const formEl = document.querySelector('.form');

        formEl.addEventListener('submit', event => {
        
            event.preventDefault();

            const formData = new FormData(formEl);
            const data = Object.fromEntries(formData);

            fetch('https://webhook.site/c38c9b26-c723-4a93-bc18-b06604c8ed66', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data)
            });
        
        });
