using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Threading;

namespace Explit
{
    public partial class Form1 : Form
    {

        const int block_size = 1024 * 1024;
        
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (inputFolderDialog.ShowDialog() == DialogResult.OK)
            {
                textBox1.Text = inputFolderDialog.SelectedPath;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (inputFolderDialog.ShowDialog() == DialogResult.OK)
            {
                textBox2.Text = inputFolderDialog.SelectedPath;
            }
        }

        // splitter function
        int split(string folder, string path)
        {
            try
            {
                // sanity check
                if (!path.EndsWith("/"))
                {
                    path += "/";
                }

                if(!(Directory.Exists(folder) && Directory.Exists(path)))
                {
                    return 1;
                }

                // initialize segmentation file writer
                StreamWriter segmentation = new StreamWriter(path + "segments.index", false);
                int segmentcounter = 0;

                // loop through all files
                foreach (string file in Directory.GetFiles(folder))
                {
                    // read the file into an array
                    BinaryReader reader = new BinaryReader(File.OpenRead(file));

                    long n = new FileInfo(file).Length;

                    // loop through all blocks
                    for (int i = 0, turns = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(n) / block_size)); i < turns; i++)
                    {
                        int buffer_size = i == turns-1 ? Convert.ToInt32(n - i*block_size) : block_size;
                        byte[] buffer = new byte[buffer_size];
                        reader.Read(buffer, 0, buffer_size);
                        File.WriteAllBytes(path + segmentcounter.ToString() + ".explit", buffer);
                        segmentation.WriteLine(segmentcounter.ToString() + ":" + file.Split('\\').Last());
                        segmentcounter++;
                        Invoke(new Action(() =>
                        {
                            progressBar1.Value = Convert.ToInt32(Math.Round(Convert.ToDouble(i  * 100 / turns)));
                            lblMessage.Text = "Splitting file: " + file;
                        }));

                    }
                }

                // close segmentation file
                segmentation.Close();

                return 0;
            }
            catch 
            {
                return 1;
            }
        }

        // merger function
        int merge(string folder, string path)
        {
            try
            {
                // sanity checks
                if (!folder.EndsWith("/"))
                {
                    folder += "/";
                }

                if (!path.EndsWith("/"))
                {
                    path += "/";
                }

                if (!File.Exists(folder + "segments.index"))
                {
                    return 1;
                }

                if (!(Directory.Exists(folder) && Directory.Exists(path)))
                {
                    return 1;
                }

                // read segmentation file
                string[] segmentation = File.ReadAllLines(folder + "segments.index");
                
                // initialize vars
                BinaryWriter writer = new BinaryWriter(Stream.Null);
                string currentfile = "";

                // loop through all segments
                foreach (string segment in segmentation)
                {
                    if (!segment.Contains(":"))
                    {
                        continue;
                    }

                    // read source and dest files
                    string sourcefile = folder + segment.Split(':')[0] + ".explit";
                    string destfile = path + segment.Split(':')[1];

                    // read all data from source file
                    byte[] data = File.ReadAllBytes(sourcefile);

                    // write data
                    if (destfile == currentfile)
                    {
                        writer.Write(data);
                    }
                    else
                    {
                        try
                        {
                            writer.Close();
                        }
                        catch { }
                        currentfile = destfile;
                        writer = new BinaryWriter(File.OpenWrite(destfile));
                        writer.Write(data);
                    }

                    Invoke(new Action(() =>
                    {
                        progressBar1.Value = Convert.ToInt32(Math.Round(Convert.ToDouble(segmentation.ToList().IndexOf(segment) * 100) / segmentation.Length));
                        lblMessage.Text = "";
                    }));
                }

                // close last file
                writer.Close();

                return 0;
            }
            catch 
            {
                return 1;
            }
        }

        void SplitThread(string folder1, string folder2)
        {
            if (split(folder1, folder2) == 0)
            {
                MessageBox.Show("Split completed successfully!");
                System.Diagnostics.Process.Start(textBox2.Text);                
            }
            else
            {
                MessageBox.Show("Oops, something went wrong!");
            }

            Invoke(new Action(() =>
            {
                progressBar1.Value = 0;
                lblMessage.Text = "";
            }));
        }

        void MergeThread(string folder1, string folder2)
        {
            if (merge(folder1, folder2) == 0)
            {
                MessageBox.Show("Merge completed successfully!");
                System.Diagnostics.Process.Start(textBox2.Text);
            }
            else
            {
                MessageBox.Show("Oops, something went wrong!");
            }

            Invoke(new Action(() =>
            {
                progressBar1.Value = 0;
                lblMessage.Text = "";
            }));
        }

        private void btnSplit_Click(object sender, EventArgs e)
        {
            if (!(string.IsNullOrWhiteSpace(textBox1.Text) || string.IsNullOrWhiteSpace(textBox1.Text)))
            {
                Thread th = new Thread(() => SplitThread(textBox1.Text, textBox2.Text));
                th.Start();                
            }
            else
            {
                MessageBox.Show("Please enter both input and output directories to perform this operation");
            }
        }

        private void btnMerge_Click(object sender, EventArgs e)
        {
            if (!(string.IsNullOrWhiteSpace(textBox1.Text) || string.IsNullOrWhiteSpace(textBox1.Text)))
            {
                Thread th = new Thread(() => MergeThread(textBox1.Text, textBox2.Text));
                th.Start();  
            }
            else
            {
                MessageBox.Show("Please enter both input and output directories to perform this operation");
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            lblMessage.Text = "";
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new About().ShowDialog();
        }

        private void helpToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new Help().ShowDialog();
        }        
    }
}
