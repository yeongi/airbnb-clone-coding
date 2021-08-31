import { Input, Button, DatePicker, Upload, Radio, Checkbox } from "antd";
import React, { useRef, useState } from "react";
import AdressSearch from "./AdressSearch";
import classes from "./HostringForm.module.css";
import KaKaoSearchAdress from "../../KaKaoMap/KaKaoSearchAdress";
import RoomInfoCount from "./RoomInfoCount";
import ImgCrop from "antd-img-crop";
import { hostPostAxios } from "../../../API/roomAxios";

const HostingForm = () => {
  const roadAddressRef = useRef("");
  const jibunAddressRef = useRef("");
  const [roadAddress, setRoadAdress] = useState("");
  const [jibunAddress, setJibun] = useState("");
  const [category, setCategory] = useState("poolVilla");
  const [roomCounter, setRoomCounter] = useState({
    headCount: 1,
    numOfBed: 1,
    numOfBath: 1,
  });

  //편의 시설 state
  const [facility, setChecked] = useState({
    tv: false,
    hairDryer: false,
    fireExtinguisher: false,
    refrigerator: false,
    microwave: false,
    cookware: false,
    park: false,
    aircon: false,
    kitchen: false,
    wifi: false,
    washingMachine: false,
    selfCheckIn: false,
    commonSolo: false,
  });

  const onCheckBoxChange = (checkedValues) => {
    const { checked, name } = checkedValues.target;
    setChecked((prevState) => {
      return { ...prevState, [name]: checked };
    });
    console.log(facility);
  };

  //제어 컴포넌트 state
  const [roomInputs, setInputs] = useState({
    detailAddress: "",
    roomname: "",
    basicCost: 0,
    cleanUpCost: 0,
    content: "",
  });

  const { detailAddress, roomname, basicCost, cleanUpCost, roomInfo, content } =
    roomInputs;

  const onInputsChange = (e) => {
    //e.target에서 name과 value 를 추출
    const { value, name } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onCounterChange = (state) => {
    setRoomCounter(state);
  };

  const onAdressChangeHandler = (road, jibun) => {
    roadAddressRef.current.state.value = road;
    jibunAddressRef.current.state.value = jibun;
    setRoadAdress(road);
    setJibun(jibun);
  };

  const onCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  //antd 이미지 업로더 라이브러리

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const hosting = [
      {
        roadAddress: roadAddress,
        jibunAddress: jibunAddress,
        category: category,
        headCount: roomCounter.headCount,
        numOfBath: roomCounter.numOfBath,
        numOfBed: roomCounter.numOfBed,
        detailAddress: roomInputs.detailAddress,
        roomname: roomInputs.roomname,
        basicCost: roomInputs.basicCost,
        cleanUpCost: roomInputs.cleanUpCost,
        content: roomInputs.content,
        facility: facility,
      },
    ];
    console.log(hosting);
    // hostPostAxios(hosting);
  };

  return (
    <div className={classes.wrapper}>
      <h1>호스팅 신청하기</h1>
      <hr />
      <form onSubmit={submitHandler} autoComplete="off">
        <section>
          <h1>주소를 선택하세요.</h1>
          <Input
            ref={roadAddressRef}
            value={roadAddress}
            placeholder="주소를 검색하세요."
            name="roadAddress"
            required
          />
          <Input
            ref={jibunAddressRef}
            value={jibunAddress}
            placeholder="주소를 검색하세요."
            name="jibunAddress"
            required
          />
          <Input
            name="detailAddress"
            value={detailAddress}
            onChange={onInputsChange}
            placeholder="상세주소를 입력하세요."
            required
          />

          <AdressSearch result={onAdressChangeHandler} />
          <div className={classes.container}>
            <KaKaoSearchAdress className={classes.map} addr={roadAddress} />
          </div>
        </section>
        <hr />
        <section>
          <h1>카테고리</h1>
          <Radio.Group
            onChange={onCategoryChange}
            value={category}
            name="category"
          >
            <Radio value="housing">주택</Radio>
            <Radio value="apartment">아파트</Radio>
            <Radio value="rentalCottage">팬션</Radio>
            <Radio value="poolVilla">풀빌라</Radio>
          </Radio.Group>
        </section>
        <hr />
        <section>
          <h1>숙소이름</h1>
          <Input
            placeholder="숙소이름을 입력해주세요."
            name="roomname"
            value={roomname}
            onChange={onInputsChange}
            required
          />
        </section>
        <hr />
        <section>
          <h1>기본요금,청소비용</h1>
          <label>기본요금</label>
          <Input
            placeholder="기본요금을 입력해주세요."
            name="basicCost"
            value={basicCost}
            onChange={onInputsChange}
            required
          />
          <label>청소비용</label>
          <Input
            placeholder="청소비용을 입력해주세요."
            name="cleanUpCost"
            value={cleanUpCost}
            onChange={onInputsChange}
            required
          />
        </section>
        <hr />
        <section>
          <h1>숙소 기본 정보</h1>
          <RoomInfoCount
            value={roomCounter}
            onCounterChange={onCounterChange}
          />
        </section>
        <hr />
        <section>
          <h1>편의시설</h1>
          <Checkbox onChange={onCheckBoxChange} name="tv">
            TV
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="hairDryer">
            헤어드라이어
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="fireExtinguisher">
            소화기
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="refrigerator">
            냉장고
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="microwave">
            전자레인지
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="cookware">
            조리도구
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="aircon">
            에어컨
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="park">
            주차장
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="kitchen">
            부엌
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="wifi">
            WIFI
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="washingMachine">
            세탁기
          </Checkbox>
        </section>
        <hr />
        <section>
          <h1>알아두면 좋은 정보</h1>
          <Checkbox onChange={onCheckBoxChange} name="selfCheckIn">
            셀프체크인
          </Checkbox>
          <Checkbox onChange={onCheckBoxChange} name="commonSolo">
            전체를 단독으로 사용
          </Checkbox>
        </section>
        <hr />
        <section>
          <h1>본문내용</h1>
          <h3>이미지</h3>
          <ImgCrop rotate>
            <Upload
              action="https://react-http-training-199ed-default-rtdb.firebaseio.com"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
          <h3>간단한 설명</h3>
          <textarea
            placeholder="500자 이내로 작성"
            name="content"
            required
            value={content}
            onChange={onInputsChange}
          />
        </section>
        <hr />
        <Button type="primary" htmlType="submit" block>
          제출 하기
        </Button>
      </form>
    </div>
  );
};

export default HostingForm;
