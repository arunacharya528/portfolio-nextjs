async function get(dataPath: string): Promise<any> {

    const fetchingURL = `https://${process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_ID}.firebaseio.com/${dataPath}.json`;

    const data = await fetch(fetchingURL, {
        next: {
            revalidate: 0,
        }
    }).then((res) => res.json())

    return data;
}

export type ProjectType = {
    title: string,
    summary: string | null
    preview_url: string | null,
    project_url: string | null,
    demo_url: string | null,
    technologies: Array<string> | null
};

type RetrieverStruct = {
    "name": Promise<string>,
    "title": Promise<string>,
    "email": Promise<string>,
    "location": Promise<string>,
    "about": Promise<string>
    "links": Promise<Array<{
        "title": string
        "href": string,
    }>>,
    "experience": Promise<Array<{
        title: string
        company: string,
        duration: {
            from: string
            to: string | null
        }
        responsibilities: Array<string>,
    }>>,
    "projects": Promise<Array<ProjectType>>
};

export default <RetrieverStruct>{
    "name": get('name'),
    "title": get('title'),
    "email": get('email'),
    "location": get('location'),
    "about": get('about'),
    "links": get('links'),
    "experience": get('experience'),
    "projects": get('projects'),
}