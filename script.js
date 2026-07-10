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
    { titulo: 'El Legado De Ayer', img: 'Imagenes/Portada De Album/El Legado De Ayer.jpg', desc: 'Álbum 2025 • Edición Banda', url: 'https://push.fm/fl/eyyhwzpr' },
    { titulo: 'Mi Único Anheló ', img: 'Imagenes/Portada De Album/Mi Unico Anhelo.jpg', desc: 'Álbum 2025 • ', url: '' },
    { titulo: 'Una Corona', img: 'Imagenes/Portada De Album/Una Corona.jpeg', desc: 'Álbum 2025 • Instrumental', url: 'https://push.fm/fl/bbp96ewk' },
    { titulo: 'Mientras Dormía', img: 'Imagenes/Portada De Album/Mientras Dormia.jpg', desc: 'Single 2025 • Pop Romántico', url: 'https://youtu.be/fJcODM1mfnw?si=NhgAHjUyYkxiO6Pc' }
];

const miniseriesData = [
    { titulo: 'Las Aventuras De Barnaby', img: 'Imagenes/Portada De Series/Próximamente.jpg', desc: 'Temporada 1 • Piloto • Cristian R.M', url: '' }
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
    { nombre: 'Facebook', url: '', icon: '<span class="social-icon facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg></span>', color: '#1877F2' },
    { nombre: 'Instagram', url: 'https:instagram.com/conexion.studios', icon: '<span class="social-icon instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg></span>', color: '#e1306c' },
    { nombre: 'Threads', url: 'https:threads.com/@conexion.studios', icon: '<span class="social-icon threads"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c2.4 0 4.2 1 5.5 2.8 1.2 1.6 1.8 3.5 1.8 5.7a10.7 10.7 0 0 1-2.2 6.5c-.8 1.1-1.9 2.1-3.2 2.9a8.6 8.6 0 0 1-7.4.2 7.3 7.3 0 0 1-3.2-3 8.7 8.7 0 0 1-1-4.3c0-2.4.9-4.6 2.6-6.2C7.2 3.3 9.3 2.4 12 2Zm0 2.2c-1.8 0-3.4.8-4.6 2.2-1.1 1.3-1.7 2.9-1.7 4.6 0 1.5.5 2.9 1.4 4 1 .1 1.9.1 2.8-.1 1.4-.3 2.6-1 3.5-2 .8-1 .9-2.2.9-3.4 0-.6-.1-1.2-.2-1.8-.2-.7-.4-1.3-.8-1.8-.7-.9-1.7-1.4-2.8-1.6-.7-.1-1.3-.1-2 .1a4.2 4.2 0 0 0-1.7 1.2c-.4.5-.7 1-.7 1.6 0 .6.2 1.2.5 1.7a3 3 0 0 0 2.1 1.3c.8.1 1.6-.1 2.3-.4.4-.2.8-.4 1.1-.8.2-.3.3-.6.3-.9 0-.4-.2-.8-.6-1.1-.6-.4-1.4-.5-2.1-.4-.6.1-1.2.4-1.7.8-.4.4-.7.8-.8 1.3-.2.9.1 1.8.8 2.4.6.5 1.4.8 2.2.8.8 0 1.6-.3 2.2-.8.8-.7 1.2-1.7 1.3-2.8.1-1.4-.2-2.8-.9-4.1-.6-1-1.4-1.7-2.4-2.3-.6-.3-1.3-.5-2-.6-.9-.1-1.8-.1-2.6.1-1.3.3-2.4 1-3.2 2-.5.6-.9 1.3-1 2-.2 1-.1 2 .3 2.9.7 1.5 2 2.5 3.6 2.8.9.2 1.8.2 2.8 0 1.4-.3 2.7-1.2 3.6-2.4.8-1.2 1.1-2.6.9-4-.2-1.4-.6-2.8-1.5-3.9C15 4 13.7 2.8 12 2.2Z"/></svg></span>', color: '#000000' },
    { nombre: 'Tik Tok', url: 'https:tiktok.com/@conexionstudiosmx', icon: '<span class="social-icon tiktok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 2h2.2a4.8 4.8 0 0 0 4.8 4.8v2.4a7.2 7.2 0 0 1-4.8-1.6v7.1a5.2 5.2 0 1 1-4.9-5.2c.2 0 .4 0 .6.1v2.3a2.9 2.9 0 1 0 2.3 2.8V2Z"/></svg></span>', color: '#000000' },
    { nombre: 'Spotify', url: '', icon: '<span class="social-icon spotify"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.62.62 0 0 1-.853.206c-2.347-1.434-5.303-1.76-8.784-.966a.622.622 0 0 1-.277-1.213c3.811-.872 7.076-.496 9.707 1.114a.62.62 0 0 1 .207.859zm1.226-2.719a.777.777 0 0 1-1.067.256c-2.686-1.652-6.784-2.133-9.962-1.17a.778.778 0 0 1-.446-1.492c3.633-1.103 8.148-.567 11.22 1.328a.777.777 0 0 1 .255 1.078zm.106-2.831C14.392 8.813 8.414 8.614 4.965 9.661a.933.933 0 1 1-.54-1.785c3.966-1.204 10.55-1.002 14.58 1.39a.933.933 0 1 1-.96 1.597z"/></svg></span>', color: '#1ed760' },
    { nombre: 'Youtube (Canal Principal)', url: 'https://www.youtube.com/@SoyCristianRM', icon: '<span class="social-icon youtube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31.4 31.4 0 0 0 .5 12a31.4 31.4 0 0 0 .5 4.5 3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 23.5 12 31.4 31.4 0 0 0 23 7.5Zm-13 8.3V8.2l6 3.8-6 4.8Z"/></svg></span>', color: '#ff0000' },
    { nombre: 'Youtube (Canal Secundario)', url: 'https:www.youtube.com/@ConexionStudios-MX', icon: '<span class="social-icon youtube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31.4 31.4 0 0 0 .5 12a31.4 31.4 0 0 0 .5 4.5 3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 23.5 12 31.4 31.4 0 0 0 23 7.5Zm-13 8.3V8.2l6 3.8-6 4.8Z"/></svg></span>', color: '#ff0000' },
    { nombre: 'Youtube Music', url: '', icon: '<span class="social-icon yt-music"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 17c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7zm0-11.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5zm-1.5 7v-5l4 2.5l-4 2.5z"/></svg></span>', color: '#ff0000' }
];

const colaboracionesData = [
    { nombre: 'Conexión', rol: 'Director General', bgImage: "Imagenes/Portada De Creadores/Conexión Studios.png", confirmado: true, estado: 'Verificado' },
    { nombre: 'Cristian R.M', rol: 'Director Principal', bgImage: "Imagenes/Portada De Creadores/Cristian RM.png", confirmado: true, estado: 'Verificado' },
    { nombre: 'MX IDAVEX', rol: 'Creador De Contenido', bgImage: "Imagenes/Portada De Creadores/MX IDAVEX.jpg", confirmado: false, estado: 'proximo' },
    { nombre: 'Miguel A.G', rol: 'Creador De Contenido', bgImage: "Imagenes/Portada De Creadores/MIGUEL AG.jpg", confirmado: false, estado: 'proximo' }
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
        
        // CORRECCIÓN: Si tiene link, usamos un <a> con href y target="_blank". Si no, un div normal.
        const tagAbierto = hasLink 
            ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-link"` 
            : `<div class="card-link no-link"`;
        const tagCerrado = hasLink ? `</a>` : `</div>`;

        return `
            ${tagAbierto}>
                <div class="card fade-in" style="--accent:${getAccentFromImage(item.img || item.titulo)}">
                    <img src="${item.img}" alt="${item.titulo}">
                    <div class="card-content">
                        <h3>${item.titulo}</h3>
                        <p>${item.desc}</p>
                        ${!hasLink ? '<small class="unavailable">No disponible aún</small>' : ''}
                    </div>
                </div>
            ${tagCerrado}
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

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.06}s`;
    });

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
        dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
    };

    viewport.addEventListener('scroll', () => requestAnimationFrame(updateActiveDot), { passive: true });

    // Hacer dots clicables
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetCard = cards[index];
            if (targetCard) {
                targetCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    updateActiveDot();
    startCountdown();

    // Notificaciones
    setupNotifications();
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
            el.innerHTML = '<span>0</span>d <span>0</span>h <span>0</span>m <span class="seconds">0</span>s';
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

// Notificaciones para eventos
function setupNotifications() {
    const notifyBtn = document.createElement('button');
    notifyBtn.id = 'notify-btn';
    notifyBtn.className = 'notify-button';
    notifyBtn.innerHTML = `🛎️ Activar notificaciones`;

    // CORRECCIÓN: Cambiado de '#eventos-section' al ID real '#eventos'
    const eventosSection = document.getElementById('eventos') || document.body;
    
    if (eventosSection) {
        eventosSection.style.position = 'relative';
        eventosSection.appendChild(notifyBtn);
    }

    notifyBtn.addEventListener('click', async () => {
        if (!("Notification" in window)) {
            alert("Tu navegador no soporta notificaciones.");
            return;
        }

        let permission = Notification.permission;
        if (permission === "granted") {
            showTestNotification();
        } else if (permission !== "denied") {
            permission = await Notification.requestPermission();
            if (permission === "granted") {
                showTestNotification();
            }
        } else {
            alert("Las notificaciones están bloqueadas. Actívalas en la configuración de tu navegador.");
        }
    });
}

function showTestNotification() {
    const notification = new Notification("¡Notificaciones activadas!", {
        body: "Recibirás alertas para los próximos eventos y lives.",
        icon: "https://via.placeholder.com/128/ff2a2a/ffffff?text=🎤",
        tag: "event-notification"
    });
    notification.onclick = () => window.focus();
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
