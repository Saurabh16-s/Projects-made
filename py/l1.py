import numpy as np

# Create 5x5 matrix with random integers between 1 and 100
matrix = np.random.randint(1, 101, (5, 5))

# Find row-wise and column-wise mean
row_mean = np.mean(matrix, axis=1)
col_mean = np.mean(matrix, axis=0)

# Replace values greater than the row-wise and column-wise mean with zero
matrix_row_mean_replaced = np.where(matrix > row_mean[:, None], 0, matrix)
matrix_col_mean_replaced = np.where(matrix > col_mean, 0, matrix)

print("Original Matrix:\n", matrix)
print("Row-wise Mean:\n", row_mean)
print("Column-wise Mean:\n", col_mean)
print("Matrix after replacing with row mean:\n", matrix_row_mean_replaced)
print("Matrix after replacing with column mean:\n", matrix_col_mean_replaced)
