import { getActivity } from "@/service/Kegiatan";
import { Activity } from "@/utils/interface";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCalendarAlt } from "react-icons/fa";

const ActivitySection = () => {
  const [activityData, setActivityData] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getActivity();
        const activeActivities = response.data.payload.filter(
          (item: Activity) => item.status === "aktif"
        );
        setActivityData(activeActivities);
      } catch (error) {
        console.error("Cannot fetch data Kegiatan:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <VerticalTimeline>
        {activityData.map((activity) => (
          <VerticalTimelineElement
            key={activity.id}
            date={new Date(activity.kegiatan_mulai).toLocaleString("id-ID", {
              dateStyle: "full",
              timeStyle: "short",
            })}
            iconStyle={{ background: "#2196f3", color: "#fff" }}
            icon={<FaCalendarAlt />}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              {activity.nama}
            </h3>
            <p>{activity.tempat_pelaksanaan}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ActivitySection;
