Para mostrar codigo en markdown, debemos cambiarles algunas cosas, esta pagina nos convierte el codigo
https://www.plus2net.com/html_tutorial/tags-page.php

</br>

## Mostrar pdf embebido en Html
<blockquote>
  <pre>
    <code>
&lt;embed src=&quot;nombre_archivo.pdf&quot; type=&quot;application/pdf&quot; width=&quot;800&quot; height=&quot;600&quot;&gt;&lt;/embed&gt; 
    </code>
  </pre>
</blockquote>

</br>

<blockquote>
  <pre>
    <code>
&lt;object data=&quot;/pdf/sample-3pp.pdf#page=2&quot; type=&quot;application/pdf&quot; width=&quot;100%&quot; height=&quot;100%&quot;&gt;<br />
   &lt;p&gt;&lt;b&gt;Example fallback content&lt;/b&gt;: This browser does not support PDFs. Please download the PDF to view it: &lt;a href=&quot;/pdf/sample-3pp.pdf&quot;&gt;Download PDF&lt;/a&gt;.&lt;/p&gt;<br />
&lt;/object&gt;<br />
  </code>
  </pre>
</blockquote>

</br>

<blockquote>
  <pre>
    <code>
&lt;iframe src=&quot;/pdf/sample-3pp.pdf#page=2&quot; width=&quot;100%&quot; height=&quot;100%&quot;&gt;<br />
This browser does not support PDFs. Please download the PDF to view it: &lt;a href=&quot;/pdf/sample-3pp.pdf&quot;&gt;Download PDF&lt;/a&gt;<br />
&lt;/iframe&gt;
  </code>
  </pre>
</blockquote>

</br>

##########################################################################################################

## Mostrar una imagen 
<blockquote>
  <pre>
    <code>
&lt;img src=&quot;pic_trulli.jpg&quot; alt=&quot;Italian Trulli&quot;&gt; 
    </code>
  </pre>
</blockquote>
