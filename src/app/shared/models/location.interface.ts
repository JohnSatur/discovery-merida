export interface Location {
  id:                 string;
  nombre:             string;
  descripcion:        string;
  topCaracteristicas: TopCaracteristicas;
  fotos:              string[];
  ubicacion:          string[];
  amenidades:         string[];
  precioPorNoche:     { [currency: string]: number };
  disponible:         boolean;
  calificacion:       Calificacion;
  comentarios:        Comentario[];
  slug:               string;
}

export interface Calificacion {
  estrellas:    number;
  evaluaciones: number;
}

export interface Comentario {
  usuario:      string;
  profileUrl:   string;
  calificacion: number;
  texto:        string;
}

export interface TopCaracteristicas {
  personas: number;
  camas:    number;
  banios:   number;
}
