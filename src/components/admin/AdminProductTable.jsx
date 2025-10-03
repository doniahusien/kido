"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminProduct } from "@/redux/features/admin/adminThunk";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    Tooltip,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Image from "next/image";
import { Star, StarOff } from "lucide-react";
import { toggleHighlight } from "@/redux/features/admin/adminThunk";


export default function AdminProductTable({ setEditProduct }) {
    const dispatch = useDispatch();
    const { products, categories } = useSelector((state) => state.admin);

    const handleDelete = (id) => {
        if (confirm("Are you sure?")) dispatch(deleteAdminProduct(id));
    };

    return (
        <TableContainer
            component={Paper}
            sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell>
                            <Typography fontWeight="bold">Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">Price</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">Category</Typography>
                        </TableCell>
                        <TableCell><Typography fontWeight="bold">Description</Typography></TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">Image</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography fontWeight="bold">Actions</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map((prod) => {
                        const category = categories.find(
                            (c) => String(c.id) === String(prod.categoryId)
                        );
                        return (
                            <TableRow key={prod.id} hover>
                                <TableCell>{prod.name}</TableCell>
                                <TableCell> ج.م {prod.price}</TableCell>
                                <TableCell>{category?.name || "Unknown"}</TableCell>
                                 <TableCell>
                    <Typography variant="body2" color="text.primary">
                        {prod.description || "—"} {/* ✅ عرض الوصف */}
                    </Typography>
                </TableCell>
                                <TableCell>
                                    {prod.images?.[0] ? (
                                        <Image
                                            width={80}
                                            height={80}
                                            src={prod.images[0]}
                                            alt={prod.name}
                                            style={{
                                                borderRadius: "8px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                            No image
                                        </Typography>
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title="Edit">
                                        <IconButton
                                            color="primary"
                                            onClick={() => setEditProduct(prod)}
                                        >
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(prod._id)}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={prod.highlight ? "Unhighlight" : "Highlight"}>
                                        <IconButton
                                            onClick={() =>
                                                dispatch(toggleHighlight({ _id: prod._id, highlight: !prod.highlight }))
                                            }
                                        >
                                            {prod.highlight ? (
                                                <Star className="text-yellow-500" fill="currentColor" />
                                            ) : (
                                                <StarOff className="text-gray-400" />
                                            )}
                                        </IconButton>
                                    </Tooltip>

                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
