export class AsanaDefination {
    constructor(
        public title?: string,
        public definition?: string,
        public procedure?: Array<string>,
        public benefits?: Array<string>,
        public limitations?: Array<string>,
        public image?: string,
        public videoId?: string
    ){}
}