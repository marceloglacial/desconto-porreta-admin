type PagesType = {
    _id: string,
    slug: string,
    title: string
}

interface IPages extends IResponse {
    data: PagesType[]
}

type SinglePageType = {
    _id: string,
    slug: string,
    title: string
    items: any
}

interface ISinglePage extends IResponse {
    data: SinglePageType
}
