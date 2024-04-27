const map = L.map('map').setView([47.579992, 1.305250], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

let Position = L.icon({
    iconUrl: 'images/Pin.svg',
    iconSize: 40,
    className: "Boutique"
})

let marker = L.marker([47.579992, 1.305250], { icon: Position })
    .bindPopup(`
            <span style='
                    display:flex; 
                    justify-content:center; 
                    font-size: 1.5rem; 
                    font-weight: bold;
            '> Ici ! </span> 
        7 rue Beaumarchais, 41000 Blois
    `)
    .addTo(map)

marker.on('mouseover', () => {
    marker.openPopup();
});

marker.on('mouseout', () => {
    marker.closePopup();
});
