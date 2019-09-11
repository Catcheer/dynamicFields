import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";

import { Button } from "antd";

function AddProduct(props) {
  const { getFieldDecorator } = props.form;
  console.log("enter");
  const [id, setId] = useState(1);
  useEffect(() => {
    console.log("useEffect");
  }, [id]);

  const handleAdd = () => {
    console.log("add");
    setId(id + 1);
  };
  console.log("before render", props.productList);

  const formItems = props.productList.map((item, index) => (
    <Form.Item label="商品" key={item.id}>
      {getFieldDecorator(`product[${item.id}]`, {
        validateTrigger: ["onChange", "onBlur"]
      })(
        <Input
          placeholder="passenger name"
          style={{ width: "30%", marginRight: 8 }}
        />
      )}
    </Form.Item>
  ));

  const getValues = () => {
    const { form } = props;
    console.log("values", form.getFieldsValue()["product"]);
  };

  console.log(formItems);

  return (
    <div>
      <React.Fragment>
        <Form>{formItems}</Form>
      </React.Fragment>
      <Button onClick={handleAdd}>click</Button>
      <Button onClick={getValues}>getValue</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productList: state
  };
};

export default React.memo(
  connect(
    mapStateToProps,
    null
  )(Form.create()(AddProduct))
);
