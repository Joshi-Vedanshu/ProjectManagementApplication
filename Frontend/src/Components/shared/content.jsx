import OrganizationListView from "./listviews/organizationlistview";

export default function Content({value}) {
    const orgView = <OrganizationListView />;
    console.log(value);
    return (<>
        {value}
    </>);
}