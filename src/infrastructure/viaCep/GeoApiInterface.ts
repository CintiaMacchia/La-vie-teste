export interface GeoApiInterface {
    endpoint: string //atributo
    getAddress(bodyValue: string): any //método
}