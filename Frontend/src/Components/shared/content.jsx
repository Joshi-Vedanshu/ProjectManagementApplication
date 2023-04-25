import CardListView from "./listviews/cardListView";
import OrganizationListView from "./listviews/organizationlistview";
import ProjectListView from "./listviews/projectListView";
import SprintListView from "./listviews/sprintListView";
import TeamListView from "./listviews/teamListView";

export default function Content({value}) {
    const orgView = <OrganizationListView />;
    console.log(value);
    return (<>
        {value}
    </>);
}
