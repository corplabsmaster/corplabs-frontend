import { Tabs, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Platform from "./platform";
const { TabPane } = Tabs;
import JiliImage from "@images/slots/provider-awcmjili.png";

const onChange = key => {
  console.log(key);
};

const Filter = (): void => {
  const filterOpts = [
    { text: "PT" },
    { text: "SEXY" },
    { text: "VENUS" },
    { text: "EVO" },
    { text: "Ezugi" },
  ];
  const [show, setShow] = React.useState(true);
  function toggle() {
    setShow(!show);
  }
  return (
    <div className="bg-jb-orange-300 text-white">
      <div
        className="content-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "22px",
            alignItems: "center",
          }}
        >
          <SearchOutlined />{" "}
          <Input
            className="input shadow-none"
            placeholder="Search Game"
            style={{ background: " #805100", border: "none" }}
          />
        </div>

        <Tabs
          style={{ borderColor: "#fff200", color: "#fff200" }}
          defaultActiveKey="1"
          onChange={onChange}
        >
          <TabPane tab="Recommended" key="1">
            {/* Content of Tab Pane 1 */}
          </TabPane>
          <TabPane tab="Latest" key="2">
            {/* Content of Tab Pane 2 */}
          </TabPane>
          <TabPane tab="A-Z" key="3">
            {/* Content of Tab Pane 3 */}
          </TabPane>
        </Tabs>
      </div>
      {show == true ? (
        <div
          style={{
            height: "2.75rem",
            backgroundImage: "linear-gradient(0deg,#805100,#ffa200 100%)",
          }}
        >
          <div className="content-bar content-container">
            <ul className="platform-wrap">
              {filterOpts.map((res, index) => {
                return (
                  <Platform
                    key={index}
                    label={res.text}
                    labeledImage={JiliImage}
                  />
                );
              })}
            </ul>
            <div
              className="btn-more"
              onClick={() => {
                toggle();
              }}
            >
              More Filters
            </div>
          </div>
        </div>
      ) : (
        <div className="content-bar-expanded">
          <div className="content-container">
            <div className="group-vendor">
              <h4>Vendor</h4>
              <ul className="vendors">
                {}
                <Platform label="JILI" labeledImage={JiliImage} />
                <Platform label="JILI" labeledImage={JiliImage} />
                <Platform label="JILI" labeledImage={JiliImage} />
                <Platform label="JILI" labeledImage={JiliImage} />
                <Platform label="JILI" labeledImage={JiliImage} />
                <Platform label="JILI" labeledImage={JiliImage} />
              </ul>
            </div>
            <div className="group-categories">
              {/* <h4>Game Category Type</h4> */}
              <ul>{/* <PlatformRadio/> */}</ul>
            </div>
            <div
              className="btn-more"
              onClick={() => {
                toggle();
              }}
            >
              Hide Items
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
