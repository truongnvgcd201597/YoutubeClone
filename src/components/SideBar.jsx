import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const SideBar = ({ getCategory }) => {
  const selectedCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((items) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: items.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          key={items.name}
          onClick={() => getCategory(items.name)}
        >
          <span
            style={{
              zIndex: "999",
              marginRight: "20px",
              color: items.name === selectedCategory ? "#fff" : "red",
            }}
          >
            {items.icon}
          </span>
          <span
            style={{ opacity: items.name === selectedCategory ? "1" : "0.8" }}
          >
            {items.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
