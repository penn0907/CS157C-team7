function fetchTherapists() {
    const specificSymptom = document.getElementById('SpecificSymptom').value;
    const serviceType = document.getElementById('serviceType').value;
    const zipCode = document.getElementById('zipCode').value;

    let url = `http://localhost:8080/therapists?specificSymptom=${specificSymptom}&serviceType=${serviceType}`;
    if (serviceType === 'InPerson' && zipCode) {
        url += `&zipCode=${zipCode}`;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results
            if (data && data.length > 0) {
            	console.log("Data:" + data);
                data.forEach(therapist => {
                    const content = `<p>Name: ${therapist.name}, Fee: ${therapist.fee}, Rating: ${therapist.rating}</p>`;;
                    resultsDiv.innerHTML += content;
                });
            } else {
                resultsDiv.innerHTML = '<p>No therapists found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching therapists:', error);
            document.getElementById('results').innerHTML = '<p>Error fetching data.</p>';
        });
}