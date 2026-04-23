import Stack from "@mui/material/Stack";
import { categories } from "../ulites/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#03A9F499",
            color: "white",
          }}
        >
          <span
            style={{
              marginRight: "15px",
              color: category.name === selectedCategory ? "white" : "#03A9F499",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
