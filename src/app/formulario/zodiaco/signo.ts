export class zodiacal {
    nombreUsuario:string = ''
    ap1:string = ''
    ap2: string = ''
    nombreCompleto: string = ''
    edad: number = 0
    dia: number = 0
    mes: number = 0
    anio: number = 0
    zodiaco: string = ''
    imagenUrl: string = ''
 
 
    respuesta(): void {
 
        this.nombreCompleto = `${this.nombreUsuario} ${this.ap1} ${this.ap2}`
 
        const animales = [
            { animal: 'Dragón', imagen: 'https://www.clarin.com/img/westernastrology/dragon.svg', anios: [2012, 2000, 1988, 1976, 1964, 1952, 1940, 1928, 1916, 1904] },
            { animal: 'Serpiente', imagen: 'https://www.clarin.com/img/westernastrology/serpiente.svg', anios: [2013, 2001, 1989, 1977, 1965, 1953, 1941, 1929, 1917, 1905] },
            { animal: 'Caballo', imagen: 'https://www.clarin.com/img/westernastrology/caballo.svg', anios: [2014, 2002, 1990, 1978, 1966, 1954, 1942, 1930, 1918, 1906] },
            { animal: 'Cabra', imagen: 'https://www.clarin.com/img/westernastrology/cabra.svg', anios: [2015, 2003, 1991, 1979, 1967, 1955, 1943, 1931, 1919, 1907] },
            { animal: 'Mono', imagen: 'https://www.clarin.com/img/westernastrology/mono.svg', anios: [2016, 2004, 1992, 1980, 1968, 1956, 1944, 1932, 1920, 1908] },
            { animal: 'Gallo', imagen: 'https://www.clarin.com/img/westernastrology/gallo.svg', anios: [2017, 2005, 1993, 1981, 1969, 1957, 1945, 1933, 1921, 1909] },
            { animal: 'Perro', imagen: 'https://www.clarin.com/img/westernastrology/perro.svg', anios: [2018, 2006, 1994, 1982, 1970, 1958, 1946, 1934, 1922, 1910] },
            { animal: 'Cerdo', imagen: 'https://www.clarin.com/img/westernastrology/chancho.svg', anios: [2019, 2007, 1995, 1983, 1971, 1959, 1947, 1935, 1923, 1911] },
            { animal: 'Rata', imagen: 'https://www.clarin.com/img/westernastrology/rata.svg', anios: [2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936, 1924, 1912] },
            { animal: 'Buey', imagen: 'https://www.clarin.com/img/westernastrology/bufalo.svg', anios: [2021, 2009, 1997, 1985, 1973, 1961, 1949, 1937, 1925, 1913] },
            { animal: 'Tigre', imagen: 'https://www.clarin.com/img/westernastrology/tigre.svg', anios: [2022, 2010, 1998, 1986, 1974, 1962, 1950, 1938, 1926, 1914] },
            { animal: 'Conejo', imagen: 'https://www.clarin.com/img/westernastrology/conejo.svg', anios: [2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939, 1927, 1915] }
        ]
 
        for (const revisar of animales) {
            for (const anioDeLista of revisar.anios) {
                if (anioDeLista === this.anio) {
                    this.zodiaco = revisar.animal
                    this.imagenUrl = revisar.imagen
                    break;
                }
            }
        }
 
 
        const diadehoy = new Date()
        const hoyAnio = diadehoy.getFullYear()
        const hoyMes = diadehoy.getMonth() + 1
        const hoyDia = diadehoy.getDate()
 
        this.edad = hoyAnio - this.anio
 
        if (hoyMes < this.mes || (hoyMes === this.mes && hoyDia < this.dia)) {
            this.edad =  this.edad -1
        }
 
        this.edad = this.edad
 
    }
}