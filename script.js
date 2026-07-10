// Partículas de fondo
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 45; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.width = p.style.height = Math.random() * 7 + 4 + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = Math.random() * 25 + 18 + 's';
        container.appendChild(p);
    }
}

// Datos
const musicaData = [
    { titulo: 'El Legado De Ayer', img: '/Imagenes/Albums/El Legado De Ayer.jpg', desc: 'Álbum 2025 • Edición Banda', url: 'https://push.fm/fl/eyyhwzpr' },
    { titulo: 'Mi Único Anheló ', img: '/Imagenes/Albums/Mi Unico Anhelo.jpg', desc: 'Álbum 2025 • ', url: '' },
    { titulo: 'Una Corona', img: '/Imagenes/Albums/Una Corona.jpeg', desc: 'Álbum 2025 • Instrumental', url: 'https://push.fm/fl/bbp96ewk' },
    { titulo: 'Mientras Dormía', img: '/Imagenes/Albums/Mientras Dormia.jpg', desc: 'Single 2025 • Pop Romántico', url: 'https://youtu.be/fJcODM1mfnw?si=NhgAHjUyYkxiO6Pc' }
];

const miniseriesData = [
    { titulo: 'Las Aventuras De Barnaby', img: '', desc: 'Temporada 1 • Piloto • Cristian R.M', url: '' }
];

const eventosData = [
    { titulo: 'Actualización Completa', fecha: '2026-07-11T15:00:00', lugar: 'Enlaces • Apartados Adicionales', estado: 'Terminado' },
    { titulo: 'Las Aventuras De Barnaby • Trailer', fecha: '0000-00-00T00:00:00', lugar: 'Youtube', estado: 'proximo' },
    { titulo: 'Actualizacion De Redes Sociales', fecha: '0000-00-00T00:00:00', lugar: 'Facebook • Instagram • Tik Tok • Thereads', estado: 'proximo' },
    { titulo: 'Las Aventuras De Barnaby • Piloto', fecha: '0000-00-00T00:00:00', lugar: 'Youtube', estado: 'proximo' },
    { titulo: 'Las Aventuras De Barnaby • Traduccion al Ingles', fecha: '0000-00-00T00:00:00', lugar: 'Youtube • Voces', estado: 'proximo' },
    { titulo: 'Las Aventuras De Barnaby • Episodio 2', fecha: '0000-00-00T00:00:00', lugar: 'Youtube', estado: 'proximo' },
    { titulo: 'Las Aventuras De Barnaby • SoundsTracks', fecha: '0000-00-00T00:00:00', lugar: 'Youtube • Spotify', estado: 'proximo' },
    { titulo: 'Album Completo • Cristian R.M', fecha: '0000-00-00T00:00:00', lugar: 'Spotify • Youtube • Dreezer', estado: 'proximo' }
];

const redesData = [
    { nombre: 'Instagram', url: '', icon: '<span class="social-icon instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg></span>', color: '#E1306C' },
    { nombre: 'X / Twitter', url: '', icon: '<span class="social-icon x"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.5 22h-5.5l-4.3-5.6L8.3 22H5.2l7.2-8.2L.5 2h5.6l3.9 5.2L18.9 2Zm-1 18h1.1L6.2 4H5.1l12.8 16Z"/></svg></span>', color: '#1DA1F2' },
    { nombre: 'YouTube', url: '', icon: '<span class="social-icon youtube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31.4 31.4 0 0 0 .5 12a31.4 31.4 0 0 0 .5 4.5 3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 23.5 12 31.4 31.4 0 0 0 23 7.5Zm-13 8.3V8.2l6 3.8-6 4.8Z"/></svg></span>', color: '#FF0000' },
    { nombre: 'TikTok', url: '', icon: '<span class="social-icon tiktok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 2h2.2a4.8 4.8 0 0 0 4.8 4.8v2.4a7.2 7.2 0 0 1-4.8-1.6v7.1a5.2 5.2 0 1 1-4.9-5.2c.2 0 .4 0 .6.1v2.3a2.9 2.9 0 1 0 2.3 2.8V2Z"/></svg></span>', color: '#000000' },
    { nombre: 'Spotify', url: '', icon: '<span class="social-icon spotify"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.7 14.2a.8.8 0 0 1-1.1.3 11.5 11.5 0 0 0-5.2-1.5 11 11 0 0 0-2.5.3.8.8 0 1 1-.3-1.6 13.7 13.7 0 0 1 3 .4 13.4 13.4 0 0 1 6.2 1.9.8.8 0 0 1 .3 1.1Zm1.2-2.7a1 1 0 0 1-1.3.4 15.2 15.2 0 0 0-6.4-1.8 15.8 15.8 0 0 0-3 .3 1 1 0 0 1-.4-1.9 18.4 18.4 0 0 1 3.5-.4 18.2 18.2 0 0 1 7.5 2.2 1 1 0 0 1 .4 1.3Zm.1-2.8a1.2 1.2 0 0 1-1.5.4 19.8 19.8 0 0 0-7.4-2 20.2 20.2 0 0 0-3.8.4 1.2 1.2 0 0 1-.6-2.3 22.8 22.8 0 0 1 4.5-.4 22.8 22.8 0 0 1 8.6 2.2 1.2 1.2 0 0 1 .4 1.5Z"/></svg></span>', color: '#1DB954' },
    { nombre: 'Threads', url: '', icon: '<span class="social-icon threads"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c2.4 0 4.2 1 5.5 2.8 1.2 1.6 1.8 3.5 1.8 5.7a10.7 10.7 0 0 1-2.2 6.5c-.8 1.1-1.9 2.1-3.2 2.9a8.6 8.6 0 0 1-7.4.2 7.3 7.3 0 0 1-3.2-3 8.7 8.7 0 0 1-1-4.3c0-2.4.9-4.6 2.6-6.2C7.2 3.3 9.3 2.4 12 2Zm0 2.2c-1.8 0-3.4.8-4.6 2.2-1.1 1.3-1.7 2.9-1.7 4.6 0 1.5.5 2.9 1.4 4 1 .1 1.9.1 2.8-.1 1.4-.3 2.6-1 3.5-2 .8-1 .9-2.2.9-3.4 0-.6-.1-1.2-.2-1.8-.2-.7-.4-1.3-.8-1.8-.7-.9-1.7-1.4-2.8-1.6-.7-.1-1.3-.1-2 .1a4.2 4.2 0 0 0-1.7 1.2c-.4.5-.7 1-.7 1.6 0 .6.2 1.2.5 1.7a3 3 0 0 0 2.1 1.3c.8.1 1.6-.1 2.3-.4.4-.2.8-.4 1.1-.8.2-.3.3-.6.3-.9 0-.4-.2-.8-.6-1.1-.6-.4-1.4-.5-2.1-.4-.6.1-1.2.4-1.7.8-.4.4-.7.8-.8 1.3-.2.9.1 1.8.8 2.4.6.5 1.4.8 2.2.8.8 0 1.6-.3 2.2-.8.8-.7 1.2-1.7 1.3-2.8.1-1.4-.2-2.8-.9-4.1-.6-1-1.4-1.7-2.4-2.3-.6-.3-1.3-.5-2-.6-.9-.1-1.8-.1-2.6.1-1.3.3-2.4 1-3.2 2-.5.6-.9 1.3-1 2-.2 1-.1 2 .3 2.9.7 1.5 2 2.5 3.6 2.8.9.2 1.8.2 2.8 0 1.4-.3 2.7-1.2 3.6-2.4.8-1.2 1.1-2.6.9-4-.2-1.4-.6-2.8-1.5-3.9C15 4 13.7 2.8 12 2.2Z"/></svg></span>', color: '#000000' },
    { nombre: 'Facebook', url: '', icon: '<span class="social-icon facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8.8h2.9l.4-3.4h-3.3V4.6c0-1 .3-1.7 1.7-1.7h1.8V.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v2.6H7.1v3.4h2.8V22h3.6Z"/></svg></span>', color: '#1877F2' },
    { nombre: 'WhatsApp', url: '', icon: '<span class="social-icon whatsapp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.7 9.7 0 0 0 4.8 19l-1 3.7 3.8-1a9.7 9.7 0 0 0 11.5-15.8Zm-7.2 15a8 8 0 0 1-4.1-1.1l-.3-.2-2.3.6.6-2.2-.2-.3A8 8 0 1 1 11.9 19.9Zm4.5-6c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.4c.1-.1.2-.2.3-.3a.4.4 0 0 0 0-.4l-.2-.4a.9.9 0 0 0-.2-.2c-.2-.1-.4-.1-.5-.1h-.4a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.2 5.6 5.6 0 0 0 1.2 3 5.2 5.2 0 0 0 3.8 2.8 3.1 3.1 0 0 0 1.8.1 2.3 2.3 0 0 0 1.7-1.1.2-.3.2-.5.1-.6-.1-.1-.4-.2-.8-.4Z"/></svg></span>', color: '#25D366' },
    { nombre: 'LinkedIn', url: '', icon: '<span class="social-icon linkedin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.4a1.56 1.56 0 0 0 0 3.1ZM5.5 9.6h2.9V19H5.5Zm4.8 0h2.8v1.3h.04c.4-.8 1.3-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V19h-2.9v-8.3c0-2-.1-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.4V19H10.3Z"/></svg></span>', color: '#0A66C2' }
];

const colaboracionesData = [
    { nombre: 'Conexión', rol: 'Director General', bgImage: "/Imagenes/Creadores/Conexion.png", confirmado: true, estado: 'confirmado' },
    { nombre: 'Cristian R.M', rol: 'Director Principal', bgImage: "/Imagenes/Creadores/Cristian.png", confirmado: true, estado: 'confirmado' },
    { nombre: 'IDAVEX MX', rol: 'Creador De Contenido', bgImage: "", confirmado: false, estado: 'proximo' },
    { nombre: 'Miguel A.G', rol: 'Creador De Contenido', bgImage: "", confirmado: false, estado: 'proximo' }
];

function formatFecha(fecha) {
    return new Date(fecha).toLocaleString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Renderizado
function renderHorizontal(id, data) {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = data.map(item => {
        const hasLink = item.url && item.url !== '' && item.url !== '#';
        return `
            <div class="card-link ${!hasLink ? 'no-link' : ''}">
                <div class="card fade-in" style="--accent:${getAccentFromImage(item.img || item.titulo)}">
                    <img src="${item.img}" alt="${item.titulo}">
                    <div class="card-content">
                        <h3>${item.titulo}</h3>
                        <p>${item.desc}</p>
                        ${!hasLink ? '<small class="unavailable">No disponible aún</small>' : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getAccentFromImage(url) {
    const palette = ['#ff2a2a', '#ff6b3d', '#ff8c42', '#4da3ff', '#00d4ff', '#7c4dff', '#ff4f81'];
    const hash = Array.from(url).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return palette[hash % palette.length];
}

function renderEventos() {
    const container = document.getElementById('eventos-container');
    const viewport = document.getElementById('eventos-roulette');
    const dotsContainer = document.getElementById('roulette-dots');
    if (!container || !viewport || !dotsContainer) return;

    const now = new Date();
    const eventosOrdenados = [...eventosData].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    container.innerHTML = eventosOrdenados.map((ev, index) => {
        const fecha = new Date(ev.fecha);
        const esPasado = fecha < now;
        const esProximo = fecha >= now;
        const esDestacado = esProximo && index === eventosOrdenados.findIndex(item => new Date(item.fecha) >= now);

        return `
            <div class="card event-card fade-in ${esDestacado ? 'highlight' : ''}" data-index="${index}" data-fecha="${ev.fecha}" style="--accent:${getAccentFromImage(ev.lugar)}">
                <div class="status ${esPasado ? 'terminado' : esDestacado ? 'destacado' : 'proximo'}">${esPasado ? 'Terminado' : esDestacado ? 'Especial' : 'Próximamente'}</div>
                <div class="card-content">
                    <h3>${ev.titulo}</h3>
                    <p><strong>${ev.lugar}</strong></p>
                    ${esDestacado ? '<div class="countdown" id="countdown"></div>' : ''}
                    <small>${formatFecha(ev.fecha)}</small>
                </div>
            </div>
        `;
    }).join('');

    dotsContainer.innerHTML = eventosOrdenados.map((_, index) => `
        <button class="roulette-dot" data-index="${index}" aria-label="Ir al evento ${index + 1}"></button>
    `).join('');

    const cards = container.querySelectorAll('.event-card');
    const dots = dotsContainer.querySelectorAll('.roulette-dot');

    cards.forEach((card, index) => card.style.animationDelay = `${index * 0.06}s`);

    const listHeight = container.scrollHeight || container.offsetHeight || 1;
    cards.forEach((card, index) => {
        const dot = dots[index];
        if (!dot) return;
        const cardCenter = card.offsetTop + card.offsetHeight / 2;
        const topPercent = Math.min(100, Math.max(0, (cardCenter / listHeight) * 100));
        dot.style.top = `calc(${topPercent}% - 6px)`;
    });

    const updateActiveDot = () => {
        const total = cards.length;
        if (!total) return;
        const scrollRatio = viewport.scrollTop / (viewport.scrollHeight - viewport.clientHeight || 1);
        const index = Math.min(total - 1, Math.max(0, Math.round(scrollRatio * (total - 1))));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    viewport.addEventListener('scroll', () => requestAnimationFrame(updateActiveDot), { passive: true });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            cards[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    updateActiveDot();
    startCountdown();
}

function startCountdown() {
    const el = document.getElementById('countdown');
    if (!el) return;

    const card = el.closest('.event-card');
    if (!card?.dataset.fecha) return;

    const target = new Date(card.dataset.fecha).getTime();

    const update = () => {
        const dist = target - Date.now();
        if (dist < 0) {
            el.classList.add('finished');
            setTimeout(() => {
                const next = card.nextElementSibling;
                if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1200);
            return;
        }

        const d = Math.floor(dist / 86400000);
        const h = Math.floor((dist % 86400000) / 3600000);
        const m = Math.floor((dist % 3600000) / 60000);
        const s = Math.floor((dist % 60000) / 1000);

        el.classList.remove('finished');
        el.innerHTML = `<span>${d}</span>d <span>${h}</span>h <span>${m}</span>m <span class="seconds">${s}</span>s`;
    };

    update();
    setInterval(update, 1000);
}

function renderRedes() {
    const container = document.getElementById('redes-scroll');
    if (!container) return;

    container.innerHTML = redesData.map(r => {
        const hasLink = r.url && r.url !== '' && r.url !== '#';
        return `
            <a href="${r.url || '#'}" target="_blank" rel="noreferrer" class="red ${!hasLink ? 'no-link' : ''}" style="--accent:${r.color}">
                ${r.icon}
                <p>${r.nombre}</p>
                ${!hasLink ? '<small class="unavailable">No disponible aún</small>' : ''}
            </a>
        `;
    }).join('');
}

function renderColaboraciones() {
    const container = document.getElementById('colaboraciones-list');
    if (!container) return;

    container.innerHTML = colaboracionesData.map(item => {
        const isActive = item.estado === 'proximo';
        const isConfirmed = item.confirmado;
        return `
            <div class="collab-card fade-in ${isConfirmed ? 'confirmed' : 'pending'} ${isActive ? 'active' : ''}" style="--collab-bg:${item.bgImage ? `linear-gradient(135deg, rgba(0,0,0,0.78), rgba(8,8,8,0.35)), url('${item.bgImage}')` : 'none'}">
                <div class="collab-status ${isActive ? 'active-dot' : ''}"></div>
                <div class="collab-card-content">
                    <div class="collab-header">
                        <h3 class="collab-name">${item.nombre}</h3>
                        ${isConfirmed ? `<span class="verified-badge"><svg viewBox="0 0 24 24"><path d="M12 2 14.4 8.6 21 9.3 15.9 13.7 17.4 20 12 16.8 6.6 20 8.1 13.7 3 9.3 9.6 8.6 12 2Z"/></svg></span>` : ''}
                    </div>
                    <p>${item.rol}</p>
                    <small class="collab-meta">${isConfirmed ? 'Confirmado' : isActive ? 'Próximo' : 'Terminado'}</small>
                </div>
            </div>
        `;
    }).join('');
}

// Inicializar
window.addEventListener('load', () => {
    createParticles();
    renderHorizontal('musica-scroll', musicaData);
    renderHorizontal('miniseries-scroll', miniseriesData);
    renderEventos();
    renderRedes();
    renderColaboraciones();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});
