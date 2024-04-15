import { useState } from "react";
import { data, dumbelData, timeseriesData } from "./data";
import { Radar } from "./Radar";
import { Button } from "@nextui-org/react";

const HEADER_HEIGHT = 130; // button + title
const COLORS = ["green", "#e0ac2b", "#6689c6", "#e85252", "#9a6fb0"];

const buttonStyle = {
  border: "1px solid",
  borderRadius: "3px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  opacity: 0.7,
};

type RadarDatasetAnimationProps = {
  width: number;
};

export const RadarDatasetAnimation = ({
  width,
}: RadarDatasetAnimationProps) => {
  const allGroups = data.map((d) => d.name);
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = data.findIndex((d) => d.name === selectedGroup);
  const groupName = allGroups[groupId];
  const groupColor = COLORS[groupId];

  const groupRadarData = data[groupId];

  const groupDumbelData = dumbelData.find((d) => d.name === selectedGroup);

  const groupLineData = timeseriesData.map((d) => {
    const [year, month] = d.Month.split("-");
    const date = new Date(Number(year), Number(month) - 1, 1);
    return {
      x: date,
      value: (d as any)[groupName],
    };
  });

  if (!groupRadarData || !groupDumbelData || !groupLineData) {
    return null;
  }

  return (
    <div
      className="p-4 bg-background flex flex-col"
      style={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 ",
      }}
    >
      <h3>Skills</h3>
      <div
        style={{
          height: HEADER_HEIGHT,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 70,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {allGroups.map((group, i) => {
            const isSelected = group === selectedGroup;
            return (
              <Button
                key={group}
                onClick={() => setSelectedGroup(group)}
                style={{
                  ...buttonStyle,
                  color: isSelected ? "white" : COLORS[i],
                  borderColor: COLORS[i],
                  backgroundColor: isSelected ? groupColor : "white",
                }}
              >
                {group}
              </Button>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Radar
          data={groupRadarData}
          width={(width / 3) * 2 - 50}
          height={300}
          axisConfig={[
            { name: "ML Ops", max: 5 },
            { name: "Data Pipelines", max: 5 },
            { name: "Database", max: 5 },
            { name: "Data Viz", max: 5 },
            { name: "Storytelling", max: 5 },
            { name: "Business Insights", max: 5 },
            { name: "Reporting", max: 5 },
            { name: "Experimentation", max: 5 },
            { name: "Stats", max: 5 },
            { name: "ML Modeling", max: 5 },
            { name: "Deployment", max: 5 },
          ]}
          color={groupColor}
        />
      </div>
    </div>
  );
};
