\c trackmymoney;

CREATE TABLE IF NOT EXISTS usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    sueldo DECIMAL(10, 2),
    fecha_registro DATE DEFAULT CURRENT_DATE,
    moneda_preferida VARCHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS categoria (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS gasto (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuario(id) ON DELETE CASCADE,
    categoria_id INTEGER REFERENCES categoria(id) ON DELETE SET NULL,
    monto DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    descripcion VARCHAR(255),
    factura BOOLEAN DEFAULT FALSE,
    metodo_pago VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS notificacion (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuario(id) ON DELETE CASCADE,
    mensaje VARCHAR(255) NOT NULL,
    fecha DATE DEFAULT CURRENT_DATE,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS objetivo_financiero (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuario(id) ON DELETE CASCADE,
    categoria_id INTEGER REFERENCES categoria(id) ON DELETE SET NULL,
    monto_limite DECIMAL(10, 2) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL
);

INSERT INTO categoria (nombre) VALUES ('Alimentación'), ('Transporte'), ('Entretenimiento'), ('Facturas'), ('Otros');

SELECT 'Base de datos TrackMyMoney creada' AS mensaje;