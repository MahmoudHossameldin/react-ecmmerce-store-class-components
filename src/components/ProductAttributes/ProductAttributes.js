import React, { Component } from "react";
import styles from "./ProductAttributes.module.css";

export default class ProductAttributes extends Component {
  render() {
    const attributes = this.props.attributes;
    return (
      <>
        {attributes
          ? attributes.map((attribute) => (
              <div className={styles.options} key={attribute.id}>
                <span>{`${attribute.name}:`}</span>
                <div className={styles.choices}>
                  {attribute.items.map((item) => (
                    <button
                      key={item.id}
                      style={
                        attribute.type === "swatch"
                          ? { backgroundColor: item.value }
                          : { background: "none" }
                      }
                      className={`${
                        attribute.type === "swatch" ? styles.swatch : ""
                      } ${
                        this.props.attributesSelections[attribute.id] ===
                        item.id
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() =>
                        this.props.changeAttrSelection(attribute.id, item)
                      }
                    >
                      {attribute.type !== "swatch" && item.value}
                    </button>
                  ))}
                </div>
              </div>
            ))
          : ""}{" "}
      </>
    );
  }
}